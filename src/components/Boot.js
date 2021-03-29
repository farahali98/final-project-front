import React from 'react'
import './Boot.css'

const Boot = () => {
    return (
        <>
        <h1>Testimonials</h1>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
	<ol className="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   
	<div className="carousel-inner" style={{display:'flex',columnGap:'20px'}}>		
		<div className="item active">
			<div className="img-box"><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/></div>
            <p className="overview"><b>Michael Holz</b>Seo Analyst at 
            <br/>
            <a href="#">OsCorp Tech.</a></p>

            
            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
			{/* <div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div> */}
		</div>
		<div className="item">
			<div className="img-box"><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/></div>
            <p className="overview"><b>Paula Wilson</b>Media Analyst at
            <br/>
<a href="#">SkyNet Inc.</a></p>
<p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
			
			{/* <div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div> */}
		</div>
		<div className="item">
			<div className="img-box"><img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/></div>
			
            <p className="overview"><b>Antonio Moreno</b>Web Developer at 
            <br/>
           <a href="#">Circle Ltd.</a></p>
            <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
			 
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>
	{/* <a className="carousel-control left" href="#myCarousel" data-slide="prev">
		<i className="fa fa-angle-left"></i>
	</a>
	<a className="carousel-control right" href="#myCarousel" data-slide="next">
		<i className="fa fa-angle-right"></i>
	</a> */}
</div>
</>
    )
}

export default Boot
