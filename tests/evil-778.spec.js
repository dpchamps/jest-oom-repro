
  describe("some-evil-spec=778", () => {
    it("evil-block-778", () => {
      window.evil_778 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  