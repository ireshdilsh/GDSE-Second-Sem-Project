package com.example.lexorabackend.repository;

import com.example.lexorabackend.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    // Find published articles
    List<Article> findByStatusOrderByPublishedAtDesc(String status);

    // Find articles by author
    List<Article> findByAuthor_IdAndStatusOrderByCreatedAtDesc(Long authorId, String status);

    // Find all articles by author (including drafts)
    List<Article> findByAuthor_IdOrderByCreatedAtDesc(Long authorId);

    // Find articles by category
    List<Article> findByCategory_IdAndStatusOrderByPublishedAtDesc(Long categoryId, String status);

    // Search articles by title or subtitle
    List<Article> findByStatusAndTitleContainingIgnoreCaseOrStatusAndSubTitleContainingIgnoreCase(
            String status1, String title, String status2, String subTitle);

    // Increment view count
    @Modifying
    @Query("UPDATE Article a SET a.viewCount = a.viewCount + 1 WHERE a.id = ?1")
    void incrementViewCount(Long id);

    // Increment like count
    @Modifying
    @Query("UPDATE Article a SET a.likeCount = a.likeCount + 1 WHERE a.id = ?1")
    void incrementLikeCount(Long id);

    // Decrement like count
    @Modifying
    @Query("UPDATE Article a SET a.likeCount = a.likeCount - 1 WHERE a.id = ?1 AND a.likeCount > 0")
    void decrementLikeCount(Long id);

    // Get trending articles based on views and likes
    @Query("SELECT a FROM Article a WHERE a.status = ?1 ORDER BY (a.viewCount + a.likeCount) DESC")
    List<Article> findTrendingArticles(String status);
}
