
  describe("some-evil-spec=628", () => {
    it("evil-block-628", () => {
      window.evil_628 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  