package com.jinkyumpark.occurencejournal.diary.request;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class DiaryAddRequest {
    @NotNull
    private Long memberId;

    private LocalDateTime diaryDate;

    @NotNull
    @NotEmpty
    private String content;

    private String emotion;
    private boolean isSpecial;
    private boolean isPublic;
}
