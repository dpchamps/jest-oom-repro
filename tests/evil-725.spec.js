
  describe("some-evil-spec=725", () => {
    it("evil-block-725", () => {
      window.evil_725 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  