
  describe("some-evil-spec=765", () => {
    it("evil-block-765", () => {
      window.evil_765 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  