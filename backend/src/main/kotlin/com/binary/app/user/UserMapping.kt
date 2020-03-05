package com.binary.app.user

import com.binary.app.user.dto.UserDto
import com.binary.app.user.entity.User

fun User.toUserDto() = UserDto(
    name = name,
    id = id,
    job = job,
    age = age,
    createdDate = createdDate
)

fun UserDto.toUser() = User(
    name = name,
    id = id,
    job = job,
    age = age
)