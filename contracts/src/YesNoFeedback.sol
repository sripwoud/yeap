// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity >=0.8.7 <0.9.0;

import {BaseFeedback} from "./BaseFeedback.sol";

contract YesNoFeedback is BaseFeedback {
    constructor(address semaphoreAddress, string memory title) BaseFeedback(semaphoreAddress, title) {}

    function isValidFeedback(uint256 feedback) internal pure override returns (bool) {
        return feedback <= 1;
    }
}
