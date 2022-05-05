
  describe("some-evil-spec=907", () => {
    it("evil-block-907", () => {
      window.evil_907 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  