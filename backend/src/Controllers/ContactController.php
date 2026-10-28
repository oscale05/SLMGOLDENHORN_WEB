<?php
declare(strict_types=1);

namespace SLM\Controllers;

use SLM\Config\Database;
use SLM\Config\Env;

class ContactController
{
    public function health(): void
    {
        header('Content-Type: application/json');
        echo json_encode(['status' => 'ok', 'time' => date('c')]);
    }

    public function store(): void
    {
        header('Content-Type: application/json');
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $name = trim((string)($input['name'] ?? ''));
        $email = trim((string)($input['email'] ?? ''));
        $company = trim((string)($input['company'] ?? ''));
        $message = trim((string)($input['message'] ?? ''));
        $lang = in_array($input['lang'] ?? 'es', ['es','en'], true) ? $input['lang'] : 'es';

        if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
            http_response_code(422);
            echo json_encode(['error' => 'Validation failed', 'code' => 422]);
            return;
        }

        $pdo = Database::pdo();
        $stmt = $pdo->prepare('INSERT INTO contacts (name,email,company,message,lang,ip,created_at) VALUES (?,?,?,?,?,?,NOW())');
        $stmt->execute([$name, $email, $company, $message, $lang, $_SERVER['REMOTE_ADDR'] ?? '']);

        http_response_code(201);
        echo json_encode(['success' => true]);
    }

    public function subscribe(): void
    {
        header('Content-Type: application/json');
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $email = trim((string)($input['email'] ?? ''));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(422);
            echo json_encode(['error' => 'Invalid email', 'code' => 422]);
            return;
        }
        $pdo = Database::pdo();
        $token = bin2hex(random_bytes(16));
        $stmt = $pdo->prepare('INSERT INTO newsletter_subscribers (email,token,created_at) VALUES (?,?,NOW()) ON DUPLICATE KEY UPDATE token=VALUES(token)');
        $stmt->execute([$email, $token]);
        http_response_code(202);
        echo json_encode(['success' => true, 'message' => 'Confirmation email sent']);
    }
}
