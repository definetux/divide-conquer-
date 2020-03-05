package com.binary.app.auth

import com.binary.app.auth.dto.UserCredDto
import org.springframework.stereotype.Service

@Service
class AuthService(private val authProvider: AuthProvider) {
    fun authenticate(userCred: UserCredDto): Boolean {
        return authProvider.authenticate(userCred.login, userCred.password)
    }
}