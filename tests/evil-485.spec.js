
  describe("some-evil-spec=485", () => {
    it("evil-block-485", () => {
      window.evil_485 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  