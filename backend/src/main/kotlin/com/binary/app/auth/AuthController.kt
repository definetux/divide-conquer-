package com.binary.app.auth

import com.binary.app.auth.dto.UserCredDto
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("auth")
class AuthController(private val authService: AuthService)  {
    @PostMapping
    fun auth(@RequestBody userCred: UserCredDto) =
        if (authService.authenticate(userCred)) ResponseEntity(true, HttpStatus.OK)
        else ResponseEntity(false, HttpStatus.UNAUTHORIZED)
}