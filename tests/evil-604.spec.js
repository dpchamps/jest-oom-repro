
  describe("some-evil-spec=604", () => {
    it("evil-block-604", () => {
      window.evil_604 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  