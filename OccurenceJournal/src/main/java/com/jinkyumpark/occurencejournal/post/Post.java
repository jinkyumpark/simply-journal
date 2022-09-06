package com.jinkyumpark.occurencejournal.post;

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

@Entity(name = "Post")
@Table(name = "post")
public class Post {
    @Id
    @SequenceGenerator(name = "post_id_seq", sequenceName = "post_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_id_seq")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "post_date")
    private LocalDateTime postDate;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false, referencedColumnName = "id", foreignKey = @ForeignKey(name = "member_post_fk"))
    private Member member;

    @Column(name = "content", nullable = false)
    private String content;
}
