import React from "react";
import Link from "next/link";

import SectionTitle from "../common/SectionTitle";

const TabFaq = () => {
  return (
    <>
      <section className="feature-tab-section ptb-120 bg-crypto" id="evi-faq">
        <div className="container" id="evi-faq">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6 text-white-75">
              <SectionTitle
                subtitle="FAQ"
                title="Frequently Asked Questions"
                titleClass="text-white-75"
                description="Dynamically initiate market positioning total linkage with
                  clicks-and-mortar technology progressively procrastinate
                  compelling."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul
                className="nav justify-content-center feature-tab-list-2 mb-0"
                id="nav-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <Link href="#tab-1">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-1"
                      role="tab"
                      aria-selected="false"
                    >
                      Tokenomics
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#tab-2">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-2"
                      role="tab"
                      aria-selected="false"
                    >
                      NFT & Staking
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#tab-3">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-3"
                      role="tab"
                      aria-selected="false"
                    >
                      DAO
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade pt-60 active show"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                      <div
                        className="accordion faq-accordion"
                        id="accordionExample"
                      >
                        <div className="bg-faq-crypto  accordion-item active">
                          <h5 className="accordion-header" id="faq-1">
                            <button
                              className="bg-faq-crypto accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                              aria-expanded="true"
                            >
                              How long do I have to hold my EVI tokens for, is
                              there a vesting period?
                            </button>
                          </h5>
                          <div
                            id="collapse-1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faq-1"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              <p>
                                EVI token has no vesting period, every purchase
                                on pre-sale is released instantaneously to the
                                investor’s wallet. Our tokenomics are designed
                                to allow this, due to the following factors:
                              </p>
                              <p>
                                1: We do not have any Venture Capital (VC)
                                investment, private sales or desk deals with the
                                EVI token. All the sales phases are exclusively
                                open to the public from the start to the end of
                                the pre-sale process.
                              </p>
                              <p>
                                2: The number of tokens you can purchase is
                                limited by our “anti-whale” mechanism. This
                                mechanism ensures that “whales” are not able to
                                consume a large percentage of the available
                                tokens in any one round, thus mitigating against
                                dumping and volatile price action.
                              </p>
                              <p>
                                3: All EV Initiative investors and participants
                                of the pre-sale phase will start together in the
                                public sale (DEX launch), with a liquidity pool
                                that the EV Initiative DAO itself will create.
                              </p>
                              <p>
                                4: We do have a vesting or “lock” mechanism to
                                prevent dumping, however this is only the case
                                for the EV Initiative NFTs.
                              </p>
                              <p>
                                5: All added value in the EV Initiative
                                ecosystem is integrated into our NFTs. EVI
                                tokens, regardless of their market price, will
                                always produce less added value in comparison.
                                This is due to NFT holder benefits and rewards
                                being generated from staking and compounding the
                                asset. The ideal investor scenario would see
                                investors having less tradable $EVI free in
                                their wallets and more NFTs. This strategy will
                                maximize value.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-2">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                              aria-expanded="false"
                            >
                              How do tokenomics ensure value, what mechanics are
                              used?
                            </button>
                          </h5>
                          <div
                            id="collapse-2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-2"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              To ensure that the long-term economic goals of
                              both EV Initiative and its investors are met, the
                              EVI token utilises a deflationary mechanism. We
                              mitigate inflation by burning a large quantity of
                              tokens for each new charging station introduced to
                              the network. This further incentivises longer term
                              investment and reduces the token supply further to
                              increase investor value.
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-3">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                              aria-expanded="false"
                            >
                              With a small charging station network in the first
                              year, how will my investment work for me?
                            </button>
                          </h5>
                          <div
                            id="collapse-3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-3"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              <p>
                                There are 2 different income streams that will
                                contribute to your staking rewards in the near
                                and longer-term:
                              </p>
                              <p>
                                1) Minting of DAO seats through EV Initiative
                                NFTs
                              </p>
                              <p>
                                2) kWh delivered through the charging network
                              </p>
                              <p>
                                The first stage (while we build the charging
                                network) will come from the DAO NFTs, this will
                                be the most important stage initially.
                                Eventually when the size of the network
                                increases, the second revenue stream will become
                                more important to our investors. We created this
                                initial system to ensure good passive income for
                                investors in the first stage of the project
                                (first 4-5 years) or until the minting process
                                is complete and we reach our Max NFT supply.
                              </p>
                              <p>
                                The second stage of revenue generation depends
                                on the kWh output delivered, this will be
                                directly proportional to the amount of charging
                                stations in the EV Initiative charging network
                                and their usage. This is the long-term vision.
                              </p>
                              <p>
                                This works as follows; we mint 1 EVI for each
                                kWh delivered and give 85% back to investors as
                                staking rewards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                      <div
                        className="accordion faq-accordion"
                        id="accordionExample"
                      >
                        <div className="bg-faq-crypto  accordion-item active">
                          <h5 className="accordion-header" id="faq-1">
                            <button
                              className="bg-faq-crypto accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                              aria-expanded="true"
                            >
                              How Can I maximize my returns?
                            </button>
                          </h5>
                          <div
                            id="collapse-1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faq-1"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              <p>
                                Here is an example of how this can be done by
                                staking and compounding interest through the EV
                                Initiative economic model:
                              </p>
                              <p>
                                Example: You have 2 NFTs staked and are earning
                                good daily rewards. After some weeks you
                                accumulate enough daily rewards to buy a new
                                Bronze NFT, so you mint it and stake it… Now you
                                have 3 NFTs staked, this simple process is
                                called compounding.
                              </p>
                              <p>
                                An investor who chooses to compound NFTs for 4-5
                                years, will ultimately end up with the ability
                                to generate perpetual passive income. This is
                                the optimal strategy for long-term investors.
                                The NFT supply is capped to 98590 units if you
                                count all the Tiers, so by compounding you end
                                up owning a greater share of the total ecosystem
                                (and the resultant daily rewards).
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-2">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                              aria-expanded="false"
                            >
                              How does the EV Initiative NFT purchase work?
                            </button>
                          </h5>
                          <div
                            id="collapse-2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-2"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              <p>
                                1) Once you have purchased your EVI token packs
                                during the pre-sale phases you will be ready to
                                mint your NFT(s)
                              </p>
                              <p>
                                2) At the end of Q1, you can “convert” your EVI
                                tokens into a EVI NFT. The NFT you can purchase
                                depends on the number of tokens you hold.
                              </p>
                              <p>
                                3) Your EV Initiative NFT allows you to receive
                                a variety of rewards from the ecosystem, from
                                charging discounts across the network to
                                lucrative staking rewards and a voting seat on
                                the DAO.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-3">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                              aria-expanded="false"
                            >
                              Can I sell my NFT if I want to?
                            </button>
                          </h5>
                          <div
                            id="collapse-3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-3"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              <p>
                                When selling your NFTs on a secondary market you
                                will only receive the $QWT amount that the third
                                party offers you. Standard market dynamics
                                apply, supply and demand are the primary factors
                                that will determine your sale price. The QoWatt
                                NFT system is created in such a way as to bring
                                more value and rewards to those who support the
                                project on a long-term basis.
                              </p>
                              <p>
                                This long-term investment strategy favours those
                                who hold and compound their NFTs. Trying to mint
                                an NFT to earn rewards one week and selling it
                                for a quick gain the next, may result in the
                                potential future loss of passive income and
                                value, compared to those who hold, compound and
                                accrue.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                      <div
                        className="accordion faq-accordion"
                        id="accordionExample"
                      >
                        <div className="bg-faq-crypto  accordion-item active">
                          <h5 className="accordion-header" id="faq-1">
                            <button
                              className="bg-faq-crypto accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                              aria-expanded="true"
                            >
                              What is an EV Initiative Founder?
                            </button>
                          </h5>
                          <div
                            id="collapse-1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faq-1"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              A Founder is someone who joined the EV Initiative
                              DAO in its infancy, someone that minted a DAO NFT
                              seat when the project was starting out. They will
                              always be recognized in the ecosystem as the most
                              important members of the community.
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-2">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                              aria-expanded="false"
                            >
                              How does the DAO work?
                            </button>
                          </h5>
                          <div
                            id="collapse-2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-2"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              The EV Initiative DAO works by providing the early
                              adopters, the ‘Founders’ of the ecosystem with a
                              voice as to how the project evolves. DAO voting
                              will be a recurring concept in the EV Initiative
                              decision making process, from minor, to major
                              decisions, that will shape the path of things to
                              come, Founders will be central to this! The DAO
                              will also provide you with a series of more
                              tangible benefits in the form of welcome gifts
                              during the first 6 weeks of the NFT mint phase.
                              Keep an eye out for these and check out the ‘EV
                              Initiative Founder’ section of our website for
                              more details.
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-3">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                              aria-expanded="false"
                            >
                              Does my vote count as much as others?
                            </button>
                          </h5>
                          <div
                            id="collapse-3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-3"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              As an EV Initiative Founder and NFT holder your
                              seat at the DAO is as important as all other
                              Founder members. Your vote will contribute to the
                              critical decisions that will be made along the
                              way. As a democratic process, there is one
                              determinant that governs the power of your vote as
                              an individual, this is the number and tier of NFT
                              you hold. Diamant holders will hold a larger
                              voting power than Bronze NFT holders, as they
                              originally held a larger allocation of tokens from
                              the pre-sale phases.
                            </div>
                          </div>
                        </div>
                        <div className="bg-faq-crypto accordion-item">
                          <h5 className="accordion-header" id="faq-4">
                            <button
                              className="bg-faq-crypto accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-4"
                              aria-expanded="false"
                            >
                              How will I know the results of DAO voting?
                            </button>
                          </h5>
                          <div
                            id="collapse-4"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq-4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-white-75">
                              Transparency is a key component of any DAO, EV
                              Initiative's DAO will be no different. All results
                              from voting will be made available to the
                              community, with a full breakdown on our official
                              channels.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabFaq;
