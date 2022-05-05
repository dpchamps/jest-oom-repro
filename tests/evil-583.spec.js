
  describe("some-evil-spec=583", () => {
    it("evil-block-583", () => {
      window.evil_583 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  