
  describe("some-evil-spec=888", () => {
    it("evil-block-888", () => {
      window.evil_888 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  