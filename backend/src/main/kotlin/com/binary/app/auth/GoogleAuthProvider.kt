package com.binary.app.auth

import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Component

@Component
class GoogleAuthProvider: AuthProvider {
    override fun authenticate(login: String, password: String): Boolean {
        throw NotImplementedError("Google is not attached")
    }
}