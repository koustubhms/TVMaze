import React from 'react';


export default function Actor({data}){
	

	return(
		// <div>{data}</div>
		
	<div className='d-flex flex-wrap mt-2 justify-content-around '>
		{data.map((Ele)=>{return (
		<div key={Ele?._embedded?.show?.id} className='mt-4 card' style={{width:'150px'}} >
			<img src={Ele?._embedded?.show?.image?.medium} className='card-img-top' style={{width:'150px'}} alt='movie show'/>
			<div className="card-body container">
    			<h6 className="card-title">{Ele._embedded.show.name}</h6>
    			<a href={Ele._embedded.show.url} className="btn btn-outline-secondary btn-sm">Official Page</a><br/><br/>
				<span className="badge bg-warning text-dark">{Ele?._embedded?.show?.rating?.average}</span>
  			</div>
		</div>)})}</div>
		
		
		)

}
