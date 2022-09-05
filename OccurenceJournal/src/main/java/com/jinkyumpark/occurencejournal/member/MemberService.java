package com.jinkyumpark.occurencejournal.member;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class MemberService {
    private MemberRepository memberRepository;

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public void addMember(Member member) {
        Optional<Member> memberOptional = memberRepository.findByMemberId(member.getMemberId());

        if(memberOptional.isPresent()) {
            throw new IllegalStateException("Duplicate User ID");
        }

        memberRepository.save(member);
    }
}
