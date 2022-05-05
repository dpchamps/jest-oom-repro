
  describe("some-evil-spec=648", () => {
    it("evil-block-648", () => {
      window.evil_648 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  