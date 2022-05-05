
  describe("some-evil-spec=551", () => {
    it("evil-block-551", () => {
      window.evil_551 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  