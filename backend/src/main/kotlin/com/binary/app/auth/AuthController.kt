package com.binary.app.auth

import com.binary.app.auth.dto.UserCredDto
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("auth")
class AuthController(private val authService: AuthService)  {
    @PostMapping
    fun auth(@RequestBody userCred: UserCredDto) = authService.authenticate(userCred)
}