<?php

/**
 * OpenApiの基本情報を記載
 *
 * @OA\Info(
 *     title="refrigeram-ctrl api",
 *     version="v1.0"
 * )
 *
 * @OA\ExternalDocumentation(
 *     url="https://zircote.github.io/swagger-php/Getting-started.html",
 *     description="Find out more about Swagger-PHP"
 * )
 *
 * @OA\Server(
 *     url="http://localhost:8003",
 *     description="local open-api url"
 * )
 *
 * @OA\Server(
 *     url="http://localhost",
 *     description="local refrigeram-ctrl url"
 * )
 *
 * @OA\SecurityScheme(
 *     securityScheme="cookieAuth",
 *     type="apiKey",
 *     in="cookie",
 *     name="laravel_session",
 * )
 *
 * @OA\Parameter(
 *     name="X-XSRF-TOKEN",
 *     in="header",
 *     description="XSRFトークン",
 *     required=true,
 *     @OA\Schema(
 *         type="string",
 *         default="{{token}}"
 *     ),
 * )
 *
 * @OA\Tag(
 *     name="カート",
 * )
 */
