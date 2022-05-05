
  describe("some-evil-spec=663", () => {
    it("evil-block-663", () => {
      window.evil_663 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  