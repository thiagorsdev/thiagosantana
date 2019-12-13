import IndexLayout from "../layouts";
import Wrapper from "../components/Wrapper";
import SiteNav from "../components/header/SiteNav";
import { SiteHeader, outer, inner, SiteMain } from "../styles/shared";
import * as React from "react";
import { css } from "@emotion/core";

import {
	PostFullHeader,
	PostFullTitle,
	NoImage,
	PostFull
} from "../templates/post";
import { PostFullContent } from "../components/PostContent";
import Footer from "../components/Footer";
import Helmet from "react-helmet";

const PageTemplate = css`
	.site-main {
		background: #fff;
		padding-bottom: 4vw;
	}
`;

const About: React.FC = () => (
	<IndexLayout>
		<Helmet>
			<title>English Content</title>
		</Helmet>
		<Wrapper css={PageTemplate}>
			<header css={[outer, SiteHeader]}>
				<div css={inner}>
					<SiteNav />
				</div>
			</header>
			<main id="site-main" className="site-main" css={[SiteMain, outer]}>
				<article className="post page" css={[PostFull, NoImage]}>
					<PostFullHeader>
						<PostFullTitle>English Content</PostFullTitle>
					</PostFullHeader>

					<PostFullContent className="post-full-content">
						<div className="post-content">
							<p>
								In a couple of weeks lots of english content
								will start to appear here. Stay tunned!
							</p>
						</div>
					</PostFullContent>
				</article>
			</main>
			<Footer />
		</Wrapper>
	</IndexLayout>
);

export default About;
