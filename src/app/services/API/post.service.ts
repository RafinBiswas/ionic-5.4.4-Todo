import { Injectable } from '@angular/core';

import wpapi from 'wpapi';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	private WPAPI: any;
	private posts: any[];

	constructor() {
		const WPAPI = wpapi;

		this.WPAPI  =  new WPAPI({
			endpoint: 'https://adeccodigital.com/wp-json',
			// username: 'rafin',
			// password: '01840679000',
		});
		// console.log(this.WPAPI.posts().get());
	}

	private async setPosts(posts: any[]) {
		const Posts  = [];
		const _WPAPI = this.WPAPI;

		posts.forEach((post, index) => {
			if (post.title.rendered !== undefined) {
				let imgSrc = {
					source_url: '',
				};

				if (post._embedded['wp:featuredmedia'] !== undefined) {
					imgSrc = post._embedded['wp:featuredmedia'];
					imgSrc = imgSrc['0'];
				}

				Posts.push({
					title: post.title.rendered,
					media: imgSrc.source_url,
				});
			}
		});

		this.posts = Posts;
	}

	public async getPosts() {
		await this.WPAPI.posts().embed().then((posts) => {
			this.setPosts(posts);
		}).catch((err) => {
			// console.error(err);
		});

		return this.posts;
	}
}
