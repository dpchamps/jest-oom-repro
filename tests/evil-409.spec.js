
  describe("some-evil-spec=409", () => {
    it("evil-block-409", () => {
      window.evil_409 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  