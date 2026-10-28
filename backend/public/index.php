<?php
declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

use SLM\Router;
use SLM\Config\Env;

Env::load(__DIR__ . '/../.env');

$router = new Router();
require __DIR__ . '/../routes/api.php';

$router->dispatch($_SERVER['REQUEST_METHOD'], parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
