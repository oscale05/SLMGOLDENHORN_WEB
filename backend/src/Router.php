<?php
declare(strict_types=1);

namespace SLM;

class Router
{
    private array $routes = [];

    public function get(string $path, callable $handler): void { $this->routes['GET'][$path] = $handler; }
    public function post(string $path, callable $handler): void { $this->routes['POST'][$path] = $handler; }

    public function dispatch(string $method, string $path): void
    {
        $path = rtrim($path, '/') ?: '/';
        $handler = $this->routes[$method][$path] ?? null;
        if (!$handler) {
            http_response_code(404);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Not found', 'code' => 404]);
            return;
        }
        $handler();
    }
}
