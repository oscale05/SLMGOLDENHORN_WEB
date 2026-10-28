<?php
declare(strict_types=1);

namespace SLM\Controllers;

use SLM\Config\Database;

class MetaController
{
    public function webhook(): void
    {
        header('Content-Type: application/json');
        $mode = $_GET['hub_mode'] ?? $_GET['hub.mode'] ?? '';
        $token = $_GET['hub_verify_token'] ?? $_GET['hub.verify_token'] ?? '';
        $challenge = $_GET['hub_challenge'] ?? $_GET['hub.challenge'] ?? '';
        if ($mode === 'subscribe' && hash_equals((string)($_ENV['META_VERIFY_TOKEN'] ?? ''), $token)) {
            echo $challenge;
            return;
        }
        http_response_code(403);
        echo json_encode(['error' => 'Forbidden']);
    }

    public function dataDeletion(): void
    {
        header('Content-Type: application/json');
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $signed = (string)($input['signed_request'] ?? '');
        $code = 'DEL-' . strtoupper(bin2hex(random_bytes(6)));
        $pdo = Database::pdo();
        $stmt = $pdo->prepare('INSERT INTO meta_data_deletion_requests (user_id,confirmation_code,status,created_at) VALUES (?,?,?,NOW())');
        $stmt->execute(['unknown', $code, 'pending']);
        echo json_encode([
            'url' => 'https://slmgoldenhorn.com/data-deletion?code=' . $code,
            'confirmation_code' => $code,
        ]);
    }
}
