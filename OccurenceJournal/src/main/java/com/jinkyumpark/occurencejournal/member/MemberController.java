package com.jinkyumpark.occurencejournal.member;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
public class MemberController {
    private MemberService userService;

    @GetMapping("all")
    public List<Member> getAllMembers() {
        return userService.getAllMembers();
    }
}
