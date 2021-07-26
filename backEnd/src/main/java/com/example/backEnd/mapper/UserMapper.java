package com.example.backEnd.mapper;


import com.example.backEnd.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserVO> userList();

    UserVO fetchUserByID(int id);

    void updateUser(UserVO userVO);

    void insertUser(UserVO userVO);

    void deleteUser(int id);
}
