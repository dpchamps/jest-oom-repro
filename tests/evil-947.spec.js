
  describe("some-evil-spec=947", () => {
    it("evil-block-947", () => {
      window.evil_947 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  