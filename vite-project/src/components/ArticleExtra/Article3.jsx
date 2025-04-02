import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import useClampText from "./useClampText"; // Import hook mới

function Article3() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/data/article3.json")
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error("Lỗi khi load dữ liệu:", error));
    }, []);

    return (
        <div className="main">
            <div className="container mt-0">
                <div className="row">
                    <div className="col-4 p-3 d-flex flex-column justify-content-between">
                        <br />
                        <h5 className="baiviet">BÀI VIẾT / COCOON</h5>
                    </div>
                </div>


                <div className="row mt-1">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <ArticleItem key={index} article={article} />
                        ))
                    ) : (
                        <p className="text-center">Đang tải dữ liệu...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

const ArticleItem = ({ article }) => {
    const [titleText, titleRef] = useClampText(article.title, 2); // Giới hạn 2 dòng cho tiêu đề
    const [descText, descRef] = useClampText(article.desc, 3); // Giới hạn 3 dòng cho mô tả

    return (
        <div className="col-4 d-flex flex-column p-3 article-container">
            {/* Link bọc ảnh */}
            <Link to={article.link} className="text-decoration-none">
                <div className="image-container">
                    <img src={article.img} alt={article.title} className="article-image" />
                </div>
            </Link>
            
            <p className="text-muted mt-2 article-text">
                <strong>{article.category}</strong> | {article.date}
            </p>

            {/* Link bọc tiêu đề */}
            <Link to={article.link} className="text-decoration-none text-dark fw-bold">
                <h6
                    className="mt-1 article-title"
                    ref={titleRef}
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >
                    {article.title}
                </h6>
            </Link>

            <p
                className="text-muted article-text"
                ref={descRef}
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}
            >
                {descText}
            </p>
        </div>
    );
};

export default Article3;