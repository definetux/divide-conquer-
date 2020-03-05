package com.binary.app.user

import com.binary.app.user.dto.UserDto
import com.binary.app.user.entity.User
import org.springframework.stereotype.Service


@Service
class UserService (val userRepository: UserRepository) {
    fun getAll() = userRepository.findAll().map(User::toUserDto)

    fun save(userDto: UserDto): List<UserDto> {
        var user = userDto.toUser()
        userRepository.save(user)
        return getAll()
    }

    fun remove(id: Int): List<UserDto>  {
        userRepository.findById(id).map(userRepository::delete)
        return getAll()
    }
}