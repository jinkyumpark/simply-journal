package com.jinkyumpark.occurencejournal.diary;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jinkyumpark.occurencejournal.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode

@Entity(name = "Diary")
@Table(name = "diary")
public class Diary {
    @Id
    @SequenceGenerator(name = "diary_id_seq", sequenceName = "diary_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "diary_id_seq")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "post_date")
    private LocalDateTime diaryDate;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false, referencedColumnName = "id", foreignKey = @ForeignKey(name = "member_diary_fk"))
    private Member member;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "isSpecial", nullable = false)
    private boolean isSpecial = false;

    @Column(name = "emotion", nullable = false)
    private Emotion emotion = Emotion.NOTPROVIDED;
}
