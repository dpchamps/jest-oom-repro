
  describe("some-evil-spec=484", () => {
    it("evil-block-484", () => {
      window.evil_484 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  