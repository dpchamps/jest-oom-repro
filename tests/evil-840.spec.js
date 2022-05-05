
  describe("some-evil-spec=840", () => {
    it("evil-block-840", () => {
      window.evil_840 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  