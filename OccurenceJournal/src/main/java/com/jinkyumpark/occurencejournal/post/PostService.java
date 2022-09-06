package com.jinkyumpark.occurencejournal.post;

import com.jinkyumpark.occurencejournal.member.Member;
import com.jinkyumpark.occurencejournal.member.MemberRepository;
import com.jinkyumpark.occurencejournal.post.request.PostAddRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor

@Service
public class PostService {
    private PostRepository postRepository;
    private MemberRepository memberRepository;

    public List<Post> getPostByMemberIdWithRange(String memberId, Integer year, Integer month) {
        Optional<Member> memberOptional = memberRepository.findByMemberId(memberId);

        if(memberOptional.isEmpty()) {
            throw new IllegalStateException("User does not exists");
        }

        LocalDateTime startDate = LocalDate.of(year, month, 1).atStartOfDay();
        LocalDateTime endDate = LocalDate.of(year, month,
                LocalDate.of(year, month, 1).lengthOfMonth()
                ).atStartOfDay();

        return postRepository.findAllByMemberAndPostDateBetween(memberOptional.get(), startDate, endDate);
    }

    public void addPost(PostAddRequest postRequest) {
        Post post = new Post();

        if(postRequest.getPostDate() == null) {
            post.setPostDate(LocalDateTime.now());
        } else {
            post.setPostDate(postRequest.getPostDate());
        }

        Optional<Member> memberOptional = memberRepository.findById(postRequest.getMemberId());
        if(memberOptional.isEmpty()) {
            throw new IllegalStateException("User does not exists");
        }
        post.setMember(memberOptional.get());

        post.setContent(postRequest.getContent());

        postRepository.save(post);
    }
}
