
  describe("some-evil-spec=113", () => {
    it("evil-block-113", () => {
      window.evil_113 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  