
  describe("some-evil-spec=705", () => {
    it("evil-block-705", () => {
      window.evil_705 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  