
  describe("some-evil-spec=525", () => {
    it("evil-block-525", () => {
      window.evil_525 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  