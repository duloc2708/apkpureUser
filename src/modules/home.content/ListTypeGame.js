class ListTypeGame extends React.Component {
    render() {
        return (
            <section className="popular-post-area gamehot pt-40">
                <div className="container">
                    <div className="row">
                        <div className="title d-flex flex-column col-lg-12">
                            <h4>danh mục trả phí</h4>
                            <span></span>
                        </div>
                        <div className="col-lg-12 gamehot__contain">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category cicon">
                                        <li>
                                            <a href="#">
                                                <i className="adventure">
                                                </i>Phiêu lưu</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="arcade"></i>
                                                Trò chơi điện tử
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="puzzle"></i>
                                                Câu đố
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="simulation"></i>
                                                Mô phỏng
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category cicon">
                                        <li>
                                            <a href="#">
                                                <i className="role-playing"></i>
                                                Nhập vai
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="sports"></i>
                                                Thể thao
                                        </a>
                                        </li>
                                        <li>
                                            <a href="/vn/game_word">
                                                <i className="word"></i>
                                                Tìm ô chữ
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="strategy"></i>
                                                Chiến thuật
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <ul className="index-category cicon">
                                        <li>
                                            <a href="#">
                                                <i className="trivia"></i>
                                                Trắc nghiệm kiến thức
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="entertainment"></i>
                                                Giải trí
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="racing"></i>
                                                Ô tô và xe cộ
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ListTypeGame