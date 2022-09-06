package com.jinkyumpark.occurencejournal.member;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/member")
public class MemberController {
    private MemberService userService;

    @GetMapping("all")
    public List<Member> getAllMembers() {
        return userService.getAllMembers();
    }

    @PostMapping
    public void addMember(@RequestBody @Valid Member member) {
        userService.addMember(member);
    }

    @DeleteMapping("{id}")
    public void deleteMember(@PathVariable("id") Long id) {
        userService.deleteMember(id);
    }
}
