package com.binary.app.user.dto

import java.util.*

data class UserDto (
    val id: Int,
    val name: String,
    val age: Int,
    val job: String,
    val createdDate: Date?
)