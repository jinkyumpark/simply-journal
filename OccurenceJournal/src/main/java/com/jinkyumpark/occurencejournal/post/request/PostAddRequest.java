package com.jinkyumpark.occurencejournal.post.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class PostAddRequest {
    @NotNull
    private Long memberId;

    private LocalDateTime postDate;

    @NotNull
    @NotEmpty
    private String content;
}
