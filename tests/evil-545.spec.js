
  describe("some-evil-spec=545", () => {
    it("evil-block-545", () => {
      window.evil_545 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  