
  describe("some-evil-spec=683", () => {
    it("evil-block-683", () => {
      window.evil_683 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  