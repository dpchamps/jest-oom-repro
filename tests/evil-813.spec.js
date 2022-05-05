
  describe("some-evil-spec=813", () => {
    it("evil-block-813", () => {
      window.evil_813 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  