package com.jinkyumpark.occurencejournal.post;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.Year;
import java.util.Calendar;
import java.util.List;

@AllArgsConstructor

@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private PostService postService;

    @GetMapping("all")
    public List<Post> getAllPosts(@RequestParam(name = "id") String memberId,
                                  @RequestParam(name = "year", required = false) Integer year,
                                  @RequestParam(name = "month", required = false) Integer month
                                  ) {
        if(year == null) year = LocalDateTime.now().getYear();
        if(month == null) month = LocalDateTime.now().getMonthValue();

        List<Post> postList = postService.getPostByMemberIdWithRange(memberId, year, month);

        return postList;
    }
}
