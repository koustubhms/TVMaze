import React from 'react';

export default function Show({data}){

return(
	<div className='d-flex flex-wrap mt-2 justify-content-around'>
		{data.map((Ele)=>{return (
		<div key={Ele.show.id} className='mt-4 card' style={{width:'150px'}} >
			<img src={Ele?.show?.image?.medium} alt='movie show' className='card-img-top' style={{width:'150px'}}/>
			<div className="card-body container">
    			<h6 className="card-title">{Ele.show.name}</h6>
    			<a href={Ele.show.url} className="btn btn-outline-secondary btn-sm">Official Page</a><br/><br/>
				<span className="badge bg-warning text-dark">{Ele?.show?.rating?.average}</span>
  			</div>
			</div>)})}</div>
	)
	
}
