
  describe("some-evil-spec=879", () => {
    it("evil-block-879", () => {
      window.evil_879 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  